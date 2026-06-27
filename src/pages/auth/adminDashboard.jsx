import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../layout/sideBar/adminSideBar";
import Card from "../../components/common/Card";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Manage Stores",
      description: "View and manage your store listings.",
      route: "/admin/store-panel",
    },
    {
      title: "Manage users",
      description: "Monitor and update user accounts.",
      route: "/admin/users",
    },
    {
      title: "Manage Moderators",
      description: "Control moderator access and permissions.",
      route: "/admin/moderators",
    },
    {
      title: "Manage Reviews",
      description: "Review and moderate customer feedback.",
      route: "/admin/reviews",
    },
  ];

  return (
    <div className="flex flex-row gap-10 h-screen overflow-hidden w-full">
      <aside className="w-64 h-[calc(100vh-4rem)] overflow-hidden">
        <AdminSideBar />
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-100 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {cards.map((card) => {
            const isActive = activeCard === card.title;

            return (
              <Card
                key={card.title}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActiveCard(card.title);
                  navigate(card.route);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveCard(card.title);
                    navigate(card.route);
                  }
                }}
                className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                  isActive ? "ring-2 ring-blue-500 bg-blue-50" : ""
                }`}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
