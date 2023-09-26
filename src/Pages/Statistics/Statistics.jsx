
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function Statistics() {
    const [donationPercent, setDonationPercent] = useState([])
    const [totalPercent, setTotalPercent] = useState([])

    useEffect(() => {
        const donationsData = JSON.parse(localStorage.getItem('donations'));

        setDonationPercent(donationsData)
        if (donationsData) {
            const totalData = 12;
            const totalDonation = donationsData.length;
            let per = (totalDonation / totalData) * 100;
            setTotalPercent(per)
        }
    }, [donationPercent])

    const data = [
        { name: "Group A", value: 100 - totalPercent },
        { name: "Group B", value: totalPercent }
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div>
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

            <div className="flex gap-20 justify-center">
                <div className="flex gap-5 items-center">
                    <p className="text-lg">Your Donation</p>
                    <div className="h-3 w-24 rounded-sm bg-[#FF444A]"></div>
                </div>
                <div className="flex gap-5 items-center">
                    <p className="text-lg">Total Donation</p>
                    <div className="h-3 w-24 rounded-sm bg-[#00C49F]"></div>

                </div>
            </div>
        </div>
    );
}



