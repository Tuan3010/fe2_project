import Link from "../../node_modules/next/link";
import './style-home.css'

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="">
        <div className="first">
          
            <div className="row">
              <div className="col l-9 px-[15px]">
                  <div className="boxContentLeft">
                    <div className="row ">
                      <div className="col l-5">
                        <div className="note-img">
                          <img src="./img/note.png" alt="" />
                        </div>
                      </div>
                      <div className="col l-7 relative">
                        <div className="top-left h-[30px] w-[30px] border-l-[4px] border-t-[4px] border-[#ae4928]  absolute top-[16px] left-[20px]"></div>
                        <div className="right-bottom h-[30px] w-[30px] border-r-[4px] border-b-[4px] border-[#ae4928]  absolute bottom-[16px] right-[20px]"></div>
                        <div className="dot rounded-full bg-red-600 h-3 w-3 absolute top-[26px] left-[30px]"></div>
                        <video src="./video/output.mp4" muted loop autoPlay></video>
                      </div>
                    </div>
                    <div className="special-food mt-[50px] px-[50px] pb-[50px] border-x-[5px] border-b-[5px] border-[#7a5a36] relative">
                        <div className="dash-line"></div>
                        <div className="special-title-food text-[40px]  text-center relative top-[-24px] ">ĐẶC SẢN ĐẤT HÀ THÀNH </div>
                        <div className="row">
                          <div className="col l-6">
                            <p>Hà Nội là cái nôi của một nền ẩm thực giản dị, đơn sơ nhưng chứa đựng trong từng món ăn sự chăm chút, tinh tế và tỉ mỉ của người nấu. Chỉ cần một chút thay đổi trong cách chế biến thì người Hà Nội cũng nhận ra món ăn đã bị biến thể ít nhiều. Đến đậu hũ cho món bún đậu cũng phải chiên lửa thật khéo, để mặt ngoài vẫn giòn nhưng bên trong thì đậu vẫn còn mềm, béo và thơm khi cắt ra, hay đến món chả rươi cũng phải làm thật kỹ lưỡng để chả không bị khô, và rươi trong chả vẫn không bị mất vị. Đến chén nước chấm cũng phải tỉ mỉ trong từng nguyên liệu thêm vào, vì chỉ thiếu một thành phần thì phần linh hồn của món ăn đã mất đi quá nửa.</p>
                            <img src="./img/anh2.jpg" alt="" />
                          </div>
                          <div className="col l-6">
                            <div className="bg-img-left "></div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="col l-3 px-[15px]">
                <div className="boxContentRight">                 
                  <h3 className="title-right-first relative text-[40px] font-[iCielBCLodestone-Regular] font-bold text-center">MỘT VÒNG HÀ THÀNH <span className="text-[16px] absolute text-[#7a5a36] bottom-[-10px] left-[50%] rotate-[45deg]">=</span></h3>
                  <p>Hà Nội là thủ đô của nước Cộng hòa xã hội chủ nghĩa Việt Nam và cũng là kinh đô của hầu hết các vương triều phong kiến Việt trước đây. Do đó, lịch sử Hà Nội gắn liền với sự thăng trầm của lịch sử Việt Nam qua các thời kỳ.</p>
                  <p>Hà Nội là thành phố trực thuộc trung ương có diện tích lớn nhất cả nước từ khi tỉnh Hà Tây sáp nhập vào, đồng thời cũng là địa phương đứng thứ nhì về dân số với gần 8 triệu người (năm 2018), sau Thành phố Hồ Chí Minh. Tuy nhiên, nếu tính những người cư trú không đăng ký thì dân số thực tế của thành phố này năm 2017 là hơn 9 triệu người.</p>
                  <div className="img">
                    <img src="./img/denngocson.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}
