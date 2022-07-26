import Button from "../buttons/Button";

export default function FeaturedProjectCard({title, text, languages, img, onReadMore, link}) {
  return (
    <div className="relative">

      <div className="w-6/12 py-6 flex-1 flex flex-col gap-4">
        <h3 className="text-2xl text-white">{title}</h3>
        <div className="p-4 bg-gray-700 z-10">
          <p>{text}</p>
        </div>

        {languages && (
          <div className="ml-2 flex gap-6 text-neutral-400">
            {languages.map((text, index) => <p key={index} >{text}</p> )}
          </div>
        )}

        {onReadMore && (
          <div>
            <Button text="Show more" onClick={() => onReadMore(title)} />
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 h-full w-7/12 flex justify-end items-center">
        <img src={img} alt="Project image" />
      </div>
    </div>
  )
}
