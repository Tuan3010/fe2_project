
import {
  DropdownMenuTrigger, DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import Link from '../../../../node_modules/next/link'
import './layout.css'
export default function Header() {
  return (
      <header className='px-[200px]  w-full mb-20'>

          <div className="div">
              <div className='flex  gap-8'>
                  <div className=" w-1/6">
                      <div className="logo items-center flex flex-col ">
                          <img src="https://dauhomemade.vn/apps/uploads/2018/09/logo.png" alt="logo" />
                          <DropdownMenu>
                              <DropdownMenuTrigger className='w-full h-[50px] bg-[#b34b29]  flex items-center px-2'>
                                  <img src="https://dauhomemade.vn/apps/themes/bundau/img/icon_menu.png" alt="" />
                                  <span className='font-[iCielBCGrindstone-Regular] text-xl font-bold menu text-[#efd698] '>DANH MỤC</span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className='bg-transparent w-[300px]  absolute MenuContent '>
                                  <DropdownMenuLabel>Restaurant menu</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>Profile</DropdownMenuItem>
                                  <DropdownMenuItem><Link href={'/snacks'}>Snacks</Link></DropdownMenuItem>
                                  <DropdownMenuItem><Link href={'/sanpham'}>Sản Phẩm<menu type="toolbar"></menu></Link></DropdownMenuItem>
                                  <DropdownMenuItem><a href="#">Đồ Ăn Vặt</a></DropdownMenuItem>
                                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                              </DropdownMenuContent>
                          </DropdownMenu>
                      </div>
                  </div>
                  <div className="w-4/6  ">
                      <div className="header-trademark w-full text-[#fff]">
                          <div className="header-trademark-right float-right text-xl text-[#fff]">BlaBla gì đó hihihi</div>
                          Thời Báo
                      </div>
                      <div className="trademark flex w-full grid grid-cols-7 h-[130px]">
                          <div className="div-text-animation w-1/7"><span className="text-animation">T</span></div>
                          <div className="div-text-animation w-1/7"><span className="text-animation">I</span></div>
                          <div className="div-text-animation w-1/7"><span className="text-animation">Ệ</span></div>
                          <div className="div-text-animation w-1/7"><span className="text-animation">M</span></div>
                          <div className="div-text-animation w-1/7"><span className="text-animation">-</span></div>
                          <div className="div-text-animation w-1/7"><span className="text-animation">Ă</span></div>
                          <div className="div-text-animation w-1/7"><span className="text-animation">N</span></div>

                      </div>
                      <div className="last-trade-mark h-[65px] w-full bg-[#7a5a36] grid place-content-center">
                          <span>TÂN THỜI - MÁT MẺ - TIỆN NGHI</span>
                      </div>
                  </div>
              </div>
              <div className="hover called w-[50px] h-[50px] fixed right-2 bottom-[120px]">
                  <a href="#">
                      <img src="https://dauhomemade.vn/apps/themes/bundau/images/messenger.svg" alt="" />
                  </a>
              </div>
              <div className="hover Mess w-[50px] h-[50px] fixed right-2 bottom-[50px]">
                  <a href="#">
                      <img src="https://dauhomemade.vn/apps/themes/bundau/images/hotline.svg" alt="" />
                  </a>

              </div>
          </div>
      </header>

  )
}