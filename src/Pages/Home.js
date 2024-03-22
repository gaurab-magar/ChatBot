import React from 'react';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import userImg from '../Assets/user.jpg';
import { AiOutlineSend } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsRobot } from "react-icons/bs";


export const Home = () => {
    const history = [
        {
            title:'First Message',  
            content: 'Lorem ipsum dolor sit amet, consectetur adipis'
        },
        {
            title:'Second Message', 
            content:'this is the second messgae that need to be shown'
        },
        {
            title:"Long Text",
            content:"this is the third message"
        },
        {
            title:'With Emoji',
            content:'thi is the emoji message'
        },
        {
            title:'bolt app',
            content:'this is a bolt hostory'
        },
        {
            title:'glovo factura',
            content:'this can be the factura from the glovo'
        },
        {
            title:'tazz',
            content:'having issue  with tazz'
        },
        {
            title:'Second Message', 
            content:'this is the second messgae that need to be shown'
        },
        {
            title:"Long Text",
            content:"this is the third message"
        },
        {
            title:'With Emoji',
            content:'thi is the emoji message'
        },
        {
            title:'bolt app',
            content:'this is a bolt hostory'
        },
        {
            title: 'No Content',
            content:'having end of the section'
        }

    ]
    const NewChat = [
        {
            role:'user',
            message:'I want to use tailwindcss'
        },
        {
            role:'assistant',
            message:'Yes in which part i can assists you '
        },
        {
            role:'user',
            message:'show me some sample codes'
        },
        {
            role:'assistant',
            message:'Here are some an example'
        },
    ]
  return (
    <main>
        <div className='container-fluid'>
            <div className='row full-height'>
                <div className='col-md-3 p-3 bg-black'>
                    <button className='btn btn-dark w-100'> 
                        <span className='d-flex align-items-center justify-content-between'>
                            <IoChatbubbleEllipsesSharp />
                                Ask Gaurab Magar
                            <IoMenuSharp />
                        </span>
                    </button>
                    <p className="text-secondary fw-bold my-3">History</p>
                    <div class="scrollbar-container d-flex flex-column gap-2 p-3 bg-dark text-light rounded-3">
                        {history.map((item,index)=>(
                            <ul className='list-group'>
                                <li className='list-group-item bg-dark bg-primary-hover' >
                                    <a key={index} href='/' class="text-decoration-none text-aliceblue">
                                        <CiTimer className='me-2' />
                                        {item.title}
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <hr className='text-white custom-hr' />
                    <button className='btn btn-outline-secondary semibold w-100'>
                        Gaurab Magar
                    </button>
                </div>
                <div className='col-md-9 p-3 bg-light'>
                    <section id='chatbox' className='d-flex justify-content-center align-items-center'>
                        <div className='prompt w-75'>
                            <div className='img-container text-center my-3'>
                                <img src={userImg} className='img-fluid img-height' alt='founderImg'></img>
                            </div>
                            <h4 className='fw-bold my-4 text-center'>How can i help you today?</h4>
                            <div className='row'>
                                {
                                    NewChat.length > 0 ? 
                                        
                                            <>
                                                <div>
                                                    {NewChat.map((item,index)=>(
                                                        <>
                                                            <span>
                                                                {item.role === 'user'?
                                                                    <div className='d-flex align-items-center gap-3 p-3'>
                                                                        <CiUser />
                                                                        <p className='mb-0'>{item.message}<br/></p>
                                                                    </div> 
                                                                :""}    
                                                            </span>
                                                            <span>
                                                                {item.role === 'assistant'?
                                                                    <div className='d-flex align-items-center gap-3 bg-dark text-success p-3'>
                                                                        <BsRobot className='text-info' />
                                                                        <p className='mb-0'>{item.message}<br/></p>
                                                                    </div>:''}  
                                                            </span>
                                                        </>
                                                    ))}
                                                </div>
                                            </>
                                        :
                                        
                                            <>
                                                <div className='col-md-6'>
                                                    <p className='border border-3 rounded-3 p-2 text-muted default-prompt'>How to use Prompts</p>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='border border-3 rounded-3 p-2 text-muted default-prompt'>How to use Prompts</p>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='border border-3 rounded-3 p-2 text-muted default-prompt'>How to use Prompts</p>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='border border-3 rounded-3 p-2 text-muted default-prompt'>How to use Prompts</p>
                                                </div>
                                            </>
                                    
                                    }
                                
                            </div>
                        </div>
                    </section>
                    <div className='d-flex flex-column align-items-center mt-3'>
                        <form className='w-100 input-group'>
                            <input className='form-control p-3' type='text' placeholder='Ask Gaurab Anything...'></input>
                            <button className='btn btn-secondary px-3 py-2'>
                                <AiOutlineSend/>
                            </button>
                        </form>
                        <small className='text-muted'>AI can  generate responses in real time.</small>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
