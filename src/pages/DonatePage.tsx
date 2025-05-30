import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import DonateOptions from '../components/Donate/DonateOptions';
import DonateImpact from '../components/Donate/DonateImpact';
import DonateForm from '../components/Donate/DonateForm';

const DonatePage: React.FC = () => {
  return (
    <div className="donate-page">
      <PageHeader 
        title="Make a Donation" 
        subtitle="Support our mission to uplift vulnerable communities through your generosity"
      />
      <div className="container">
        <DonateOptions />
        <DonateForm />
        <DonateImpact />
      </div>
    </div>
  );
};

export default DonatePage;
