import React, { useState } from "react";



import { styles } from "../../styles";


const EvolvhackReg = () => {
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [filledInputs, setFilledInputs] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    const filledInputs = Object.values({...inputs, [name]: value}).filter((val) => val !== "").length;
    setFilledInputs(filledInputs > 4 ? 4 : filledInputs);
  };
  return (
    <div className={`relative w-full h-full mx-auto bg-black`}>
      <div className='flex flex-col justify-center items-center py-20'>
        <span className='text-[50px]'>EvolvHack</span>
        <div className='bg-[#2b2b2b] w-10/12 h-3/6 mt-7 rounded-2xl border-4 border-[#ff8f00]'>
          <form className='flex flex-col px-[25px] py-[30px]'>
          <span className='text-white font-medium mb-4'>Team Name</span>
          <input
          type="text"
          placeholder="Enter your Team Name"
          className="w-3/5 mb-[30px] border-2 border-[#ff8f00] rounded-md"
          // value={inputs.input1}
          // onChange={handleInputChange}
          // name="input1"
        />
        
        <span className='text-white font-medium mb-4'>Team Member Names</span>
        <div className="flex flex-row">
        <input
          type="text"
          placeholder="Team Leader"
          value={inputs.input1}
          onChange={handleInputChange}
          name="input1"
          className="mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <input
          type="text"
          placeholder="Team Member 2"
          value={inputs.input2}
          onChange={handleInputChange}
          name="input2"
          className="mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        </div>
        <div className="flex flex-row">
        <input
          type="text"
          placeholder="Team Member 3"
          value={inputs.input3}
          onChange={handleInputChange}
          name="input3"
          className="mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <input
          type="text"
          placeholder="Team Member 4"
          value={inputs.input4}
          onChange={handleInputChange}
          name="input4"
          className="mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        </div>
        <span className='text-white font-medium mb-4'>Number of team members</span>
        <input
          type="text"
          placeholder="Number of Filled Inputs"
          value={Math.min(filledInputs, 4)}
          readOnly
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        {/* PHONE NUMBER */}
        <span className='text-white font-medium mb-4'>Team Leader Phone No.</span>
        <input
          type="tel"
          placeholder="Enter Phone No. of team leader"
          // value={inputs.input4}
          // onChange={handleInputChange}
          name="no1"
          maxLength={10}
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <span className='text-white font-medium mb-4'>Team Member Phone No.</span>
        <div className="flex flex-row">
        <input
          type="tel"
          placeholder="Enter Phone No. of member 2"
          // value={inputs.input4}
          // onChange={handleInputChange}
          name="no1"
          maxLength={10}
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <input
          type="tel"
          placeholder="Enter Phone No. of member 3"
          // value={inputs.input4}
          // onChange={handleInputChange}
          name="no1"
          maxLength={10}
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <input
          type="tel"
          placeholder="Enter Phone No. of memeber 4"
          // value={inputs.input4}
          // onChange={handleInputChange}
          name="no1"
          maxLength={10}
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        </div>
        <span className='text-white font-medium mb-4'>Team Member Email</span>
        <div className="flex flex-row">
        <input
          type="email"
          placeholder="Team Leader"
          // value={inputs.input1}
          // onChange={handleInputChange}
          // name="input1"
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <input
          type="email"
          placeholder="Team Member 2"
          // value={inputs.input2}
          // onChange={handleInputChange}
          // name="input2"
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        </div>
        <div className="flex flex-row">
        <input
          type="email"
          placeholder="Team Member 3"
          // value={inputs.input3}
          // onChange={handleInputChange}
          // name="input3"
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        <input
          type="email"
          placeholder="Team Member 4"
          // value={inputs.input4}
          // onChange={handleInputChange}
          // name="input4"
          className="w-1/4 mr-[30px] mb-[15px] border-2 border-[#ff8f00] rounded-md"
        />
        </div>
        <span className='text-white font-medium mb-4'>Enter your problem statement</span>
        <input
          type="text"
        />
        <span className='text-white font-medium mb-4'>Upload problem statement file</span>
        <input
          type="file"
        />
        <span className='text-white font-medium mb-4'>Upload college id of team leader</span>
        <input
          type="file"
        />
        <input
          type="text"
          placeholder="Mention any special needs that maybe required"
        />
          </form>
        </div>
      </div>
    </div>
  )
}

export default EvolvhackReg