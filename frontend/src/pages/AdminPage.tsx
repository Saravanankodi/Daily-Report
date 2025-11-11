import desflyer from '../assets/desflyer.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

interface Report {
  _id: string;
  username: string;
  date: string;
  report: string;
  createdAt: string;
}

function AdminPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/reports/all');
        setReports(res.data.reports);
        setLoading(false);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load reports');
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <div className="text-center py-10 text-xl">Loading reports...</div>;
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
    <section className="w-full h-full m-auto">
        <header className="w-full h-auto">
            <img src={desflyer} alt="" className="w-auto m-auto" />
            <h2 className="tittle text-2xl text-center">Over All Employee-Daily Report System</h2>
        </header>
        {reports.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No reports submitted yet.</p>
        ) : (
          // <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          //   {reports.map((r) => (
          //     <div
          //       key={r._id}
          //       className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
          //     >
          //       <div className="flex justify-between items-start mb-4">
          //         <div>
          //           <h3 className="text-xl font-bold text-blue-700">{r.username}</h3>
          //           <p className="text-sm text-gray-500">
          //             Submitted: {format(new Date(r.createdAt), 'dd MMM yyyy, hh:mm a')}
          //           </p>
          //         </div>
          //         <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          //           {format(new Date(r.date), 'dd MMM yyyy')}
          //         </span>
          //       </div>

          //       <div className="bg-gray-50 p-4 rounded-lg">
          //         <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
          //           {r.report}
          //         </p>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          <table className="w-full h-full border m-auto">
            <thead className='border'>
              <th className="text border">Date</th>
              <th className="text border">DF-01</th>
              <th className="text border">DF-02</th>
              <th className="text border">DF-03</th>
              <th className="text border">DF-04</th>
              <th className="text border">DF-05</th>
            </thead>
          </table>
        )}
    </section>
    </>
  )
}

export default AdminPage