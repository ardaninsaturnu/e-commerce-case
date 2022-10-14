import {useState} from "react";

type Props = {
  label: string,
  name: string,
  type?: string,
  placeholder?: string
}

const UInput = ({ name, type = "text", label, placeholder = `enter ${name}` } : Props ) => {
  const [ value, setValue ] = useState<any>( null )

  return(
    <div className="flex flex-col mb-1">
      <label className="text-orange-400 mb-1" htmlFor="name">{ label }:</label>
      <input
        className="py-1 px-3 bg-orange-200 rounded"
        type={type}
        name={ name }
        placeholder={ placeholder }
        value={value}
        onChange={e => setValue(e.currentTarget.value) }
      />
    </div>
  )
}

export default UInput;