import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className="flex gap-5 justify-center items-center mt-4">
      <button className="border-2 p-2 border-red-500"
        onClick={()=>{
          dispatch(decrement())
        }}
      >
        decrement
      </button>
      <div className="">
        {count}
      </div>
      <button className="border-2 p-2 border-green-600"
        onClick={()=> {
          dispatch(increment())
        }}
      >
        increment
      </button>
      
      <button className="border-2 p-2 border-green-600"
        onClick={()=> {
          dispatch(incrementByAmount(5))
        }}
      >
        increment by amount 5
      </button>
    </div>
  )
}

export default App
