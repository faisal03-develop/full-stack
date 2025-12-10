import Plan from "../common/plan";

export default function DashboardContent() {
  return (
    <div className="flex-1 p-8 ml-50">
      <div className="mb-8">
        <h1 className="text-(--purple) text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-black">Patient / Dashboard</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            Welcome <span className="text-gray-400">ⓘ</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Welcome to your secure patient portal, you will be able to safely order prescribed treatments
            from our pharmacy partners and manage your ordering requests, chat with team members
            and have access to educational material.
          </p>
          <p className="text-gray-300 mb-4">
            A friendly reminder: all product orders are completed with our partner pharmacies and will
            only be dispensed according to Standard Pharmacy Compliance and Standards. The decision
            to dispense the prescription rests entirely with the pharmacist.
          </p>
          <p className="text-gray-300">
            Select which service suits your needs best below.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            Treatments <span className="text-gray-400">ⓘ</span>
          </h2>
          <table className="w-full text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Treatment</th>
                <th className="text-left py-2">Current Stage</th>
                <th className="text-left py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">03 Dec 25</td>
                <td className="py-4">MEN'S FULL HORMONE RESET</td>
                <td className="py-4">Pending</td>
                <td className="py-4">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                    Resume Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-black text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-2 gap-6">
          <Plan heading='General Consultation'  points={['Initial assessment', 'Medical history review', 'Vital signs check', 'Follow-up recommendations']} price='$20.00' />
          
          <Plan heading='Diabetes Management' points={['Blood sugar monitoring', 'Dietary guidelines', 'Medication adjustment', 'Monthly review']} price='$45.00' />
          
        </div>
      </div>
    </div>
  );
}
