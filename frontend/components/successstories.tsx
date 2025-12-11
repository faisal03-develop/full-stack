import SuccessCards from "./common/successCards"

export default function successStories() {
  return (
    <div  className="mt-30">
      <span className="text-(--purple) underline text-5xl flex flex-row justify-center gap-6 mb-20">Success Stories</span>
        <div className="flex flex-wrap justify-between mx-30">
          <SuccessCards url="/images/value1.jpg" name="Jonathan" description="Jonathan followed our Cardiac Health Check plan and saw steady improvement in his heart health. With regular monitoring and guided lifestyle adjustments, he regained his energy and returned to his normal routine." />
          <SuccessCards url="/images/value2.jpg" name="Anderson" description="After joining our Physiotherapy Session Plan, Liam experienced reduced back pain and improved flexibility. The targeted exercises helped him recover quickly and resume his daily activities." />
          <SuccessCards url="/images/value3.jpg" name="Isabella" description="Isabella used our Diabetes Management Plan to stabilize her blood sugar levels. With consistent checkups and personalized guidance, she achieved better control and felt healthier overall." />
        </div>
    </div>
  )
}
