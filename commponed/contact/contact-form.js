import React from 'react'
import classes from './contact-form.module.css'
import {useRef,useState,useEffect} from 'react'
import Notification from '../ui/notification';
async function sendContectData(contactDetails){
    const response = await fetch('api/contact',{
        method:'POST',
        // body:JSON.stringify({
        //     email:enterEmail,
        //     name:enterName,
        //     message:enterMessage,

        // }),
        body:JSON.stringify(contactDetails),
        headers:{
            'Content-Type':'application/json'

        }
    })
    const data =await response.json();
    if(!response.ok){
        throw new Error(data.message || 'Somthing went worng !!!')
    }
}
 function ContactForm() {
     const[enteredEmail,setEnterEmail]=useState('');
     const[enteredName,setEnterName]=useState('');
     const[enteredMessage,setEnterMessage]=useState('');
    const[requestStatus,setRequestStatus]=useState() //'Pending ,Error ,Success
    const[requestError,setRequestError]=useState()
    useEffect(()=>{
        if(requestStatus ==='success' || requestStatus ==='error'){
            const timer =setTimeout(()=>{
                setRequestStatus(null),
                setRequestError(null)

            },3000);
            return ()=>clearTimeout(timer)
        }
    },[requestStatus])
   async function sendMessageHeandler(event){ // notification Send Hear
        event.preventDefault();
       
        setRequestStatus('pending');
        try{

            await sendContectData({
                email:enteredEmail,
                name:enteredName,
                message:enteredMessage
            });

            setRequestStatus('success')
            
        }
        catch(error){
            setRequestError(error.message)

            setRequestStatus('error')
        }
        

    }
    let notification;
    if(requestStatus==='pending'){
        notification={
            status:'pending',
            title:'sending message ---',
            message:'You message is on its way'
        }
    }
    if(requestStatus ==='success'){
        notification={
            status:'success',
            title:'Success!',
            message: 'Message Sent SucessFully'
        }
    };
    if(requestStatus ==='error'){
        notification={
            status:'error',
            title:'error',
            message: requestError,
        }
    }

    return (
        <section className={classes.contact} onSubmit={sendMessageHeandler}>
        <h1>Hwo Can i help You!!</h1>
        <form className={classes.form} >
            <div className={classes.controls}>
                <div className={classes.control}>
                <label htmlFor="email">Your Email</label>
                <input type='email' id='email' 
                value={enteredEmail} 
                onChange={(e)=>setEnterEmail(e.target.value)} 
                requred/>
                </div>

                <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type='text' id='name' value={enteredName} 
                onChange={(e)=>setEnterName(e.target.value)} requred/>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>You Message</label>
                <textarea id='message' rows='5' value={enteredMessage} 
                onChange={(e)=>setEnterMessage(e.target.value)}></textarea>
            </div>
            <div className={classes.actions}>
            <button>Send Message</button>

            </div>
        </form>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message}
        />}
    </section>

    )
}

export default ContactForm
