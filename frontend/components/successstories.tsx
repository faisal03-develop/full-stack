import SuccessCards from "./common/successcards"

export default function successstories() {
  return (
    <div  className="mt-30">
      <span className="text-(--purple) underline text-5xl flex flex-row justify-center mb-20">Success Stories</span>
        <div className="flex flex-wrap justify-between mx-30">
          <SuccessCards url="/images/value1.jpg" name="Patient Name" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptas! Velit voluptates earum dolorem dicta similique, provident ratione? Assumenda, d" />
          <SuccessCards url="/images/value2.jpg" name="Patient Name" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptas! Velit voluptates earum dolorem dicta similique, provident ratione? Assumenda, d" />
          <SuccessCards url="/images/value3.jpg" name="Patient Name" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptas! Velit voluptates earum dolorem dicta similique, provident ratione? Assumenda, d" />
        </div>
    </div>
  )
}
