

const Users = () => {
  return (
    <>
      <div className="my-4 px-4  h-full ">
        <div className="  flex items-center justify-start border-b-2  pb-4 mb-2">
          <button className="btn btn-success btn-sm rounded">Open</button>
          <h2 className=" ps-2 text-xl font-bold" >Chat</h2>
        </div>

        {/* search box  */}
        <label className="input input-bordered flex items-center gap-2 mt-4 input-md">
          <input type="text" className="grow " placeholder="Search" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
        {/* people  */}
        <div className="mt-4 h-full overflow-y-auto ">
          {/* m 1  */}
          <div className="p-4 bg-gray-100 rounded flex justify-between ">
            <div className="flex">
              <img className="mask mask-circle" width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Typing...</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>

          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle" width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle " width={60} height={60} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle " width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 bg-gray-100 rounded flex justify-between ">
            <div className="flex">
              <img className="mask mask-circle" width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Typing...</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>

          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle" width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle " width={60} height={60} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle " width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 bg-gray-100 rounded flex justify-between ">
            <div className="flex">
              <img className="mask mask-circle" width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Typing...</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>

          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle" width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle " width={60} height={60} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>
          {/* m 1  */}
          <div className="p-4 hover:bg-gray-100 rounded flex justify-between cursor-pointer">
            <div className="flex">
              <img className="mask mask-circle " width={60} height={60} src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&h=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="ms-2">
                <h4 className="font-bold text-xl">Mehadi Hasan</h4>
                <span className="text-gray-500	">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            {/* time  */}
            <div>
              <span className="text-gray-500	">11:15</span>
            </div>
          </div>

        </div>


      </div>


    </>
  );
};

export default Users;