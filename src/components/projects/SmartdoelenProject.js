export default function SmartdoelenProject() {

  // - short info on what smartgoals are
  // - goal of this project
  // - bit about the CRUD for goals, and clients (the admin side)
  // - bit about user side & experience

  return (
    <div className="flex flex-col items-center text-lg">
      <div className="mb-8">
        <p>A part of the CRM system at Spectrum Multimedia & IT, where I'm currently studying.</p>
        <p>Smartgoals are personal goals that help clients work towards certain skills, like social or techical skills.</p>
        <p>The progress on these goals are then occasionally reviewed and discussed to see if new goals can be selected.</p>
      </div>

      <div className="mb-20">
        <p>The goals of this project:</p>
        <p className="ml-2">- allow clients to easily see what goals they currently have, which one's they've achieved, and select new one's when needed.</p>
        <p className="ml-2">- make it easy for employees to manage existing goals and add new ones, and to see who has which goals selected.</p>
      </div>

      <div className="mb-20 flex items-center">
        <div className="p-6">
          <p className="mb-8">For managing the goals i made a simple CRUD system, the goals are sorted by topic & skill.</p>
          <p>When viewing clients, you can see their selected goals, and toggle which ones are completed.</p>
        </div>

        <div className="w-3/5 flex-shrink-0">
          <img src="/build/images/Smartdoelen2.png" alt="CRUD system for goals" />
        </div>
      </div>

      <div className="mb-20 flex items-center">
        <div className="p-6">
          <p className="mb-2">Clients can see their goals, and can select new goals.</p>
        </div>

        <div className="w-3/5 flex-shrink-0">
          <img src="/build/images/Smartdoelen3.png" alt="View for selecting new goals" />
        </div>
      </div>

    </div>
  )
}


