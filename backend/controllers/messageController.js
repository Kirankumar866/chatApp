import Conversation from "../models/conversationSchema.js";
import Message from "../models/messageSchema.js"


//SENDING MESSAGE
export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participantsId : {$all :  [senderId,receiverId]},
        })

        

        if(!conversation){
            conversation = await Conversation.create({
                participantsId : [senderId,receiverId],
            })

        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        //sequential
        //await newMessage.save()
        //await conversation.save()

        //SOCKET.IO FUNCTIONALITY WILL GO HERE

        //runs parallel

        await Promise.all([newMessage.save(),conversation.save()]);

        res.status(201).json({
            success: true,
            message : "Message Sent successfully!",
            newMessage
        })


        
        
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error: "Internal server error"})
        
    }
}

//GETTING MESSAGES FROM OTHER USERS

export const getMessages = async(req,res)=>{
    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participantsId : {$all: [senderId,userToChatId]},
        }).populate("messages");

        if(!conversation){
            return  res.status(200).json(

                {
                    message : "No messages found"
                }
            )

        }
        res.status(200).json(
            conversation.messages
        )
        
        
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message)
        res.status(500).json({error: "Internal server error"})
        
    }

}