export default function Card({ image, subtitle, title, text }) {
  return (
    <div className="max-w-4xl w-full sm:w-[75vw] h-auto sm:h-80 bg-white rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden">
      
      {/* Left side - Image */}
      <div className="w-full sm:w-1/2 h-[250px] sm:h-full">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      
      {/* Right side - Content */}
      <div className="w-full sm:w-1/2 p-4 sm:p-12 flex flex-col">
        {/* Subtitle (Fixed Position) */}
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 flex-none">
          {subtitle}
        </p>
        
        {/* Title (Fixed Position) */}
        <h2 className="text-2xl font-bold text-gray-900 mt-4 flex-none">
          {title}
        </h2>
        
        {/* Text (Grows Downward) */}
        <div className="mt-2 flex-grow">
          <p className="text-gray-700">{text}</p>
        </div>
      </div>

    </div>
  );
}
