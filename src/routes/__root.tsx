import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='flex flex-row items-center justify-center h-screen flex-1'>
      <div className='w-20 bg-accent h-full'></div>
      <div className='w-full h-full'>
        <Outlet />
      </div>
    </div>  
  )
}
