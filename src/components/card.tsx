import {Alldata} from '../allData'

type Props = {
  id: any,
  name: string
}

const handleClick = (id: any) => {
  const {target} = id
  console.log(target)
  
  
}
export const Card = ({id, name}: Props) => {
  return (
    <div id={id} key={id} onClick={handleClick}>
      {name}
    </div>
  )
}