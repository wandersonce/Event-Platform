import {useNavigate} from 'react-router-dom';
import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export default function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {loading}] = useCreateSubscriberMutation();

  async function handleSubscribe(event:FormEvent){
    event.preventDefault();

    await createSubscriber({
      variables:{
        name,
        email
      }
    })

    navigate('/event');
  }

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
     
     <div className='max-w-[1100px] w-full flex justify-between mt-20 mx-auto'>
      <div className='max-w-[640px]'>
        <Logo />
        <h1 className="mt-8 text-[2.5rem] leading-tight">
          Build a <strong className="text-blue-500">full application</strong>, from scratch, with <strong className="text-blue-500">React </strong>
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxed">
          On only one week you will learn practicing, one of the most popular development stacks!
        </p>
      </div>

      <div className="p-8 bg-gray-700 border border-gray-500 rounded">
        <strong className="text-2xl mb-6 block"> Subscribe for FREE</strong>

        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
          <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="text" 
            placeholder="Full Name..."
            onChange={event => setName(event.target.value)}
            />

          <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="email" 
            placeholder="Type Your Email..." 
            onChange={event => setEmail(event.target.value)}
          />

          <button 
          type="submit" 
          className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-small hover:bg-green-700 transition-colors disabled:opacity-50"
          disabled={loading}
          >
            Hold my Spot!
          </button>
        </form>
      </div>
     </div>

      <img src="/src/assets/code-mockup.png" alt="Code Screen" className="mt-10" />
    </div>
  )
}
