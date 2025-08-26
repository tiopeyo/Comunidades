
import React from 'react';

interface OpportunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-stone-50 rounded-lg shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-white">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg leading-6 font-medium text-stone-900">{title}</h3>
        <p className="mt-2 text-base text-stone-500">{description}</p>
      </div>
    </div>
  );
};

export default OpportunityCard;
