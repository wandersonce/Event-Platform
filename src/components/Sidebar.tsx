import Lesson from './Lesson'

export default function Sidebar() {
  return (
    <aside className='w-[384px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Lesson Schedule
      </span>

      <div className='flex flex-col gap-8'>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  )
}
