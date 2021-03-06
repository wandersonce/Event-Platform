import {Link, useParams} from 'react-router-dom';
import {CheckCircle, Lock} from 'phosphor-react';
import {isPast, format} from 'date-fns';

interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson(props:LessonProps) {
  const { slug } = useParams<{ slug: string}>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEE' • ' d' of ' MMM' • ' K'h'mm");

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>
         {availableDateFormatted}
         </span>

      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? "bg-green-500" : ""}`}>
        <header className='flex items-center justify-between'>

          {isLessonAvailable ? (
            <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ? "text-white" : "text-blue-500"}`}>
              <CheckCircle size={20} />
              Content free
            </span>
          
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
            <Lock size={20} />
            Soon
            </span>
          )}

          <span className='text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold'>
            {props.type === 'live' ? 'LIVE' : 'PRACTICE CLASS'}
          </span>

        </header>

        <strong className={`mt-5 block ${isActiveLesson ? "text-white" : "text-gray-200"}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
