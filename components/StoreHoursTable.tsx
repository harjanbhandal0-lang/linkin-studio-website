export function StoreHoursTable() {
  return (
    <div className="bg-white/40 rounded-lg p-6 border border-royal-blue/10">
      <h3 className="font-playfair text-xl font-bold text-royal-blue mb-4">Store Hours</h3>
      <table className="w-full text-charcoal">
        <tbody className="text-base leading-8">
          <tr className="border-b border-royal-blue/5">
            <td className="font-semibold pr-4">Monday – Friday</td>
            <td className="text-right">10:00 AM – 7:00 PM</td>
          </tr>
          <tr className="border-b border-royal-blue/5">
            <td className="font-semibold pr-4">Saturday</td>
            <td className="text-right">11:00 AM – 6:30 PM</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4">Sunday</td>
            <td className="text-right">11:00 AM – 6:30 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
