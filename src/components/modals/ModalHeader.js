export default function ModalHeader({ title, onClose }) {
  return (
    <div className="relative mb-6">
      <h3 className="h-10 flex items-center justify-center text-3xl text-emerald-400">{title}</h3>
      <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center cursor-pointer text-2xl hover:text-emerald-400 transition-colors" onClick={onClose}>x</div>
    </div>
  )
}
