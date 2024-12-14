
import plus from "@/app/public/Plus.png"
import Image from "next/image";


export default function FAQSection() {
  return (
    <div className="flex justify-center py-12 flex-wrap lg:flex-nowrap">
      <div className="w-[77.5%]">
        <h2 className="text-center text-3xl font-semibold mb-4">
          Questions Looks Here
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {/* FAQ 1 */}
          <div className=" bg-[#F7F7F7] p-4 rounded-lg ">
            <h3 className="font-semibold flex justify-between">
              What types of chairs do you offer?
              <Image className="w-[20px] h-[20px]" src={plus} alt="plus sign"></Image>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestias ipsa totam
              quidem?
            </p>
          </div>

          {/* FAQ 2 */}
          <div className=" p-4 rounded-lg  bg-[#F7F7F7]">
            <h3 className="font-semibold flex justify-between">
              How can we get in touch with you?
              <Image className="w-[20px] h-[20px]" src={plus} alt="plus sign"></Image>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestias ipsa totam
              quidem?
            </p>
          </div>

          {/* FAQ 3 */}
          <div className=" p-4 rounded-lg  bg-[#F7F7F7]">
            <h3 className="font-semibold flex justify-between">
              Do your chairs come with a warranty?
              <Image className="w-[20px] h-[20px]" src={plus} alt="plus sign"></Image>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestias ipsa totam
              quidem?
            </p>
          </div>

          {/* FAQ 4 */}
          <div className=" p-4 rounded-lg  bg-[#F7F7F7]">
            <h3 className="font-semibold flex justify-between">
              What will be delivered? And When?
              <Image className="w-[20px] h-[20px]" src={plus} alt="plus sign"></Image>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestias ipsa totam
              quidem?
            </p>
          </div>

          {/* FAQ 5 */}
          <div className=" p-4 rounded-lg  bg-[#F7F7F7]">
            <h3 className="font-semibold flex justify-between">
              Can I try a chair before purchasing?
              <Image className="w-[20px] h-[20px]" src={plus} alt="plus sign"></Image>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestias ipsa totam
              quidem?
            </p>
          </div>

          {/* FAQ 6 */}
          <div className=" p-4 rounded-lg  bg-[#F7F7F7]">
            <h3 className="font-semibold flex justify-between">
              How do I clean and maintain my Comforty chair?
              <Image className="w-[20px] h-[20px]" src={plus} alt="plus sign"></Image>
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestias ipsa totam
              quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
