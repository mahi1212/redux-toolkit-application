import { RootState } from "./redux/store"
import {useSelector} from 'react-redux'
function App() {
  
  const {count} = useSelector((state: RootState) => state.counter)
  return (
    <div className="flex gap-5 justify-center items-center mt-4">
      <button className="border-2 p-2 border-red-500">
        decrement
      </button>
      <div className="">
        {count}
      </div>
      <button className="border-2 p-2 border-green-600">
        increment
      </button>
    </div>
  )
}

export default App
