import Link from "../../../../node_modules/next/link";

const MenuFixed = () =>{
  return (
    <div className="menu-fixed-right fixed right-[-8px] top-[180px]">
      <ul className="">
        <li ><a className="item-menu-fixed bg-[#f0c215] py-[30px] px-[10px] border-[5px] border-solid border-[#7a5a36] outline-[3px] outline outline-[#7a5a36] outline-offset-4 block" href=""><img className="" src="../img/datban.png" alt=""/></a></li>
        <li ><a className="item-menu-fixed  mt-3 px-[10px] py-[10px] bg-[#f0c215] border-[5px] border-solid border-[#7a5a36] outline-[3px] outline outline-[#7a5a36] outline-offset-4  block" href=""><img className="w-[18px]" src="../img/bag.png" alt="" /></a></li>
      </ul>
    </div>
  )
}

export default MenuFixed;