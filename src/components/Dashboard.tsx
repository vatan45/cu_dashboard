'use client'

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { FaHome, FaClipboardList, FaCheckSquare, FaBell, FaUser, FaCog, FaSignOutAlt, FaExclamationCircle } from 'react-icons/fa';
import Navbar from './Navbar';

const Dashboard = () => {
  const activeMembers = [
    { month: 'Jun', value: 30 },
    { month: 'Jul', value: 10 },
    { month: 'Aug', value: 20 },
    { month: 'Sep', value: 15 },
    { month: 'Oct', value: 35 },
    { month: 'Nov', value: 25 },
    { month: 'Dec', value: 30 },
  ];

  const genderData = [
    { name: 'Male', value: 45 },
    { name: 'Female', value: 35 },
  ];

  const COLORS = ['#FFA500', '#FFD700'];

  const [selectedDate, setSelectedDate] = useState(20);

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <div 
          key={i} 
          className={`text-center p-1 cursor-pointer text-sm ${
            i === selectedDate 
              ? 'bg-yellow-500 text-white rounded-full' 
              : i < selectedDate 
                ? 'text-gray-400' 
                : 'text-black'
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const timeSlots = [
    { time: '09:00', event: 'Interview for Secretary', duration: '09:00 - 09:30' },
    { time: '12:00', event: 'Team Meeting', duration: '12:00 - 13:00' },
    { time: '15:00', event: 'Project Review', duration: '15:00 - 16:30' },
    { time: '17:00', event: 'Client Call', duration: '17:00 - 17:30' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
      
        <div className="w-16 bg-white shadow-md overflow-y-auto">
          <nav>
            <ul className="space-y-4 py-4">
              <li className="flex justify-center bg-yellow-500 text-white p-2 mx-2 rounded-xl">
                <FaHome className="text-2xl" />
              </li>
              <li className="flex justify-center text-gray-600 p-2 mx-2 rounded-xl hover:bg-gray-100">
                <FaClipboardList className="text-2xl" />
              </li>
              <li className="flex justify-center text-gray-600 p-2 mx-2 rounded-xl hover:bg-gray-100">
                <FaCheckSquare className="text-2xl" />
              </li>
              <li className="flex justify-center text-gray-600 p-2 mx-2 rounded-xl hover:bg-gray-100">
                <div className="relative">
                  <FaBell className="text-2xl" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                </div>
              </li>
              <li className="flex justify-center text-gray-600 p-2 mx-2 rounded-xl hover:bg-gray-100">
                <FaUser className="text-2xl" />
              </li>
              <li className="flex justify-center text-gray-600 p-2 mx-2 rounded-xl hover:bg-gray-100">
                <FaCog className="text-2xl" />
              </li>
              <li className="flex justify-center text-gray-600 p-2 mx-2 rounded-xl hover:bg-gray-100">
                <FaSignOutAlt className="text-2xl" />
              </li>
            </ul>
          </nav>
        </div>
        
       
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
         
            <div className="flex justify-between space-x-6">
              {['Total Events', 'Total Members', 'Pending Approvals'].map((title, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md flex-1 border border-yellow-500">
                  <h2 className="text-2xl font-bold text-gray-800">{[176, 86, 20][index]}</h2>
                  <p className="text-gray-600 text-base">{title}</p>
                </div>
              ))}
            </div>
            
          
            <div className="flex space-x-6">
      
              <div className="bg-white p-5 rounded-xl shadow-md w-2/5">
                <h3 className="font-bold mb-3 text-lg text-blue-900">Event Approvals</h3>
                <div className="overflow-hidden h-36 relative">
                  <table className="w-full">
                    <tbody>
                      <tr className="text-gray-800 text-sm">
                        <td className="py-2 w-1/4">lorem ipsum</td>
                        <td className="py-2 w-1/4">21.08.2024</td>
                        <td className="py-2 w-1/4">Ms. Ankita</td>
                        <td className="py-2 w-1/4 text-right">
                          <button className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">View</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
              </div>
              
            
              <div className="space-y-6 w-3/5">
                <div className="bg-gradient-to-b from-yellow-500 to-yellow-400 p-5 rounded-xl shadow-md">
                  <h3 className="font-bold text-white mb-3 text-lg">Urgent Tasks</h3>
                  <ul className="text-white space-y-2 text-sm">
                    {[1, 2, 3].map((_, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <FaExclamationCircle className="text-white text-xs" />
                        <span>Finance Approval</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-6">
                  <div className="bg-white p-5 rounded-xl shadow-md w-1/2">
                    <h3 className="font-bold mb-3 text-lg text-blue-900">Active Members</h3>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart data={activeMembers}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                        <YAxis hide={true} />
                        <Bar dataKey="value" fill="#FFA500" radius={[5, 5, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl shadow-md w-1/2">
                    <h3 className="font-bold mb-3 text-lg text-blue-900">Gender</h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={genderData}
                          cx="50%"
                          cy="50%"
                          outerRadius={70}
                          innerRadius={40}
                          fill="#8884d8"
                          dataKey="value"
                          startAngle={0}
                          endAngle={180}
                          paddingAngle={5}
                        >
                          {genderData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Legend 
                          verticalAlign="bottom" 
                          height={36}
                          formatter={(value, entry, index) => (
                            <span style={{ color: COLORS[index % COLORS.length] }}>
                              ● {value}
                            </span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            
         
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="font-bold mb-3 text-lg text-blue-900">Membership Approval</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Department</th>
                    <th className="pb-2">UID</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-800">
                    <td className="py-2">lorem ipsum</td>
                    <td className="py-2">lorem ipsum</td>
                    <td className="py-2">21BPD1111</td>
                    <td className="py-2">PENDING</td>
                  </tr>
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
       
        <div className="w-1/6 bg-white p-4 shadow-md flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-black">July 2024</h3>
            <div className="flex space-x-2">
              <button className="text-gray-400">&lt;</button>
              <button className="text-gray-400">&gt;</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-4">
            <div className="text-center font-bold text-gray-400 text-xs">S</div>
            <div className="text-center font-bold text-gray-400 text-xs">M</div>
            <div className="text-center font-bold text-gray-400 text-xs">T</div>
            <div className="text-center font-bold text-gray-400 text-xs">W</div>
            <div className="text-center font-bold text-gray-400 text-xs">T</div>
            <div className="text-center font-bold text-gray-400 text-xs">F</div>
            <div className="text-center font-bold text-gray-400 text-xs">S</div>
            {generateCalendarDays()}
          </div>
          <div className="flex-grow overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-black">Wednesday, {selectedDate} July</h4>
              <button className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xl">+</button>
            </div>
            <div className="relative">
              {[...Array(24)].map((_, index) => (
                <div key={index} className="flex items-start h-12 border-t border-gray-200">
                  <div className="w-12 text-right pr-2 text-xs text-gray-400 pt-1">
                    {index === 0 ? '12 AM' : index < 12 ? `${index} AM` : index === 12 ? '12 PM' : `${index - 12} PM`}
                  </div>
                  <div className="flex-grow relative">
                    {timeSlots.find(slot => parseInt(slot.time.split(':')[0]) === index) && (
                      <div 
                        className="absolute left-0 right-0 bg-yellow-300 rounded-md p-1 overflow-hidden"
                        style={{
                          top: '0',
                          height: `${(parseInt(timeSlots.find(slot => parseInt(slot.time.split(':')[0]) === index)!.duration.split(' - ')[1].split(':')[0]) - index) * 48}px`
                        }}
                      >
                        <p className="text-xs font-semibold truncate">{timeSlots.find(slot => parseInt(slot.time.split(':')[0]) === index)!.event}</p>
                        <p className="text-xs truncate">{timeSlots.find(slot => parseInt(slot.time.split(':')[0]) === index)!.duration}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;