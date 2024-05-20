import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="container">
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
                      <div className="col l-7">
                        <video src="./video/output.mp4" muted loop autoPlay></video>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col l-3 px-[15px]">
                <div className="boxContentRight">
                  <Link href={'./home'}>HOME</Link>
                  <h3>Một vòng hà thành</h3>
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
