import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col justify-center items-center h-full gap-2 p-4'>
    <div className='flex flex-row gap-2 max-w-md w-full'><Input className=' w-full'/><Button>Submit</Button></div>
    </div>
}
