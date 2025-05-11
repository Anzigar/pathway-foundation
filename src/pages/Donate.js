import React, { useState } from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import { FaHandHoldingHeart, FaRegCreditCard, FaRegMoneyBillAlt, FaRegCalendarAlt } from "react-icons/fa";

const DonateSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const DonateContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DonateGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const MainContent = styled.div``;

const SideContent = styled.div``;

const DonateTitle = styled.h2`
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 24px;
`;

const DonateText = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
`;

const DonateForm = styled.form`
  margin-top: 40px;
  display: grid;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 16px;
  color: var(--text-primary);
  transition: border 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const DonationAmounts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AmountButton = styled.button`
  padding: 14px 16px;
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 6px;
  background-color: ${props => props.selected ? 'rgba(6, 104, 225, 0.1)' : 'transparent'};
  color: ${props => props.selected ? 'var(--primary-color)' : 'var(--text-primary)'};
  font-weight: ${props => props.selected ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(6, 104, 225, 0.05);
  }
`;

const FrequencyOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FrequencyButton = styled.button`
  padding: 14px 16px;
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 6px;
  background-color: ${props => props.selected ? 'rgba(6, 104, 225, 0.1)' : 'transparent'};
  color: ${props => props.selected ? 'var(--primary-color)' : 'var(--text-primary)'};
  font-weight: ${props => props.selected ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(6, 104, 225, 0.05);
  }
  
  svg {
    font-size: 18px;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 16px 32px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-4px);
  }
  
  &:disabled {
    background-color: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
  }
`;

const CurrencyToggle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

const CurrencyButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 6px;
  background-color: ${props => props.selected ? 'rgba(6, 104, 225, 0.1)' : 'transparent'};
  color: ${props => props.selected ? 'var(--primary-color)' : 'var(--text-primary)'};
  font-weight: ${props => props.selected ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(6, 104, 225, 0.05);
  }
`;

const DonateInfoCard = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
`;

const InfoCardTitle = styled.h3`
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: var(--primary-color);
  }
`;

const InfoCardText = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
`;

const ImpactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ImpactItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  
  &:before {
    content: "✓";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 10px;
  }
`;

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);
  
  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount(0);
    }
  };
  
  const handleFrequencySelect = (freq) => {
    setFrequency(freq);
  };
  
  const handleCurrencySelect = (curr) => {
    setCurrency(curr);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      // Redirect to payment processor would happen here
      alert("Redirecting to payment processor...");
    }, 1500);
  };
  
  const getSelectedAmount = () => {
    return customAmount ? parseFloat(customAmount) : donationAmount;
  };
  
  const formatCurrency = (amount) => {
    return currency === "USD" 
      ? `$${amount}` 
      : `${amount.toLocaleString()} TZS`;
  };
  
  return (
    <>
      <PageBanner 
        title="Make a Donation" 
        subtitle="Your support helps us create sustainable change in vulnerable communities" 
      />
      
      <DonateSection>
        <DonateContent>
          <DonateGrid>
            <MainContent>
              <DonateTitle>Support Our Work</DonateTitle>
              <DonateText>
                Your donation directly supports our programs and helps us create sustainable change in vulnerable communities. Choose an amount below to make a difference today.
              </DonateText>
              
              <DonateForm onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel>Currency</FormLabel>
                  <CurrencyToggle>
                    <CurrencyButton 
                      type="button"
                      selected={currency === "USD"} 
                      onClick={() => handleCurrencySelect("USD")}
                    >
                      USD ($)
                    </CurrencyButton>
                    <CurrencyButton 
                      type="button"
                      selected={currency === "TZS"} 
                      onClick={() => handleCurrencySelect("TZS")}
                    >
                      TZS (Tsh)
                    </CurrencyButton>
                  </CurrencyToggle>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Donation Amount</FormLabel>
                  <DonationAmounts>
                    <AmountButton 
                      type="button"
                      selected={donationAmount === 20 && customAmount === ""} 
                      onClick={() => handleAmountSelect(20)}
                    >
                      {currency === "USD" ? "$20" : "20,000 TZS"}
                    </AmountButton>
                    <AmountButton 
                      type="button"
                      selected={donationAmount === 50 && customAmount === ""} 
                      onClick={() => handleAmountSelect(50)}
                    >
                      {currency === "USD" ? "$50" : "50,000 TZS"}
                    </AmountButton>
                    <AmountButton 
                      type="button"
                      selected={donationAmount === 100 && customAmount === ""} 
                      onClick={() => handleAmountSelect(100)}
                    >
                      {currency === "USD" ? "$100" : "100,000 TZS"}
                    </AmountButton>
                    <AmountButton 
                      type="button"
                      selected={donationAmount === 250 && customAmount === ""} 
                      onClick={() => handleAmountSelect(250)}
                    >
                      {currency === "USD" ? "$250" : "250,000 TZS"}
                    </AmountButton>
                    <AmountButton 
                      type="button"
                      selected={donationAmount === 500 && customAmount === ""} 
                      onClick={() => handleAmountSelect(500)}
                    >
                      {currency === "USD" ? "$500" : "500,000 TZS"}
                    </AmountButton>
                    <AmountButton 
                      type="button"
                      selected={donationAmount === 1000 && customAmount === ""} 
                      onClick={() => handleAmountSelect(1000)}
                    >
                      {currency === "USD" ? "$1,000" : "1,000,000 TZS"}
                    </AmountButton>
                  </DonationAmounts>
                  
                  <FormInput 
                    type="text" 
                    placeholder={`Custom amount (${currency === "USD" ? "$" : "TZS"})`}
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Donation Frequency</FormLabel>
                  <FrequencyOptions>
                    <FrequencyButton 
                      type="button"
                      selected={frequency === "one-time"} 
                      onClick={() => handleFrequencySelect("one-time")}
                    >
                      <FaRegMoneyBillAlt /> One-time
                    </FrequencyButton>
                    <FrequencyButton 
                      type="button"
                      selected={frequency === "monthly"} 
                      onClick={() => handleFrequencySelect("monthly")}
                    >
                      <FaRegCalendarAlt /> Monthly
                    </FrequencyButton>
                  </FrequencyOptions>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Personal Information</FormLabel>
                  <FormRow>
                    <FormInput 
                      type="text" 
                      placeholder="First Name*" 
                      required 
                    />
                    <FormInput 
                      type="text" 
                      placeholder="Last Name*" 
                      required 
                    />
                  </FormRow>
                </FormGroup>
                
                <FormGroup>
                  <FormInput 
                    type="email" 
                    placeholder="Email Address*" 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormInput 
                    type="tel" 
                    placeholder="Phone Number (Optional)" 
                  />
                </FormGroup>
                
                <DonateText>
                  You will be redirected to our secure payment processor to complete your {formatCurrency(getSelectedAmount())} {frequency === "monthly" ? "monthly" : "one-time"} donation.
                </DonateText>
                
                <SubmitButton type="submit" disabled={loading || (donationAmount === 0 && !customAmount)}>
                  {loading ? "Processing..." : `Donate ${formatCurrency(getSelectedAmount())} ${frequency === "monthly" ? "Monthly" : ""}`}
                </SubmitButton>
              </DonateForm>
            </MainContent>
            
            <SideContent>
              <DonateInfoCard>
                <InfoCardTitle>
                  <FaHandHoldingHeart /> Your Impact
                </InfoCardTitle>
                <InfoCardText>
                  Here&apos;s how your donation can make a difference:
                </InfoCardText>
                <ImpactList>
                  <ImpactItem>$20 provides school supplies for a student for a term</ImpactItem>
                  <ImpactItem>$50 funds vocational training for a youth</ImpactItem>
                  <ImpactItem>$100 provides clean water for a family for a year</ImpactItem>
                  <ImpactItem>$250 supports a women&apos;s microenterprise</ImpactItem>
                  <ImpactItem>$500 funds a community WASH project</ImpactItem>
                </ImpactList>
              </DonateInfoCard>
              
              <DonateInfoCard>
                <InfoCardTitle>
                  <FaRegCreditCard /> Secure Payment
                </InfoCardTitle>
                <InfoCardText>
                  We use secure payment processors to protect your personal and financial information. All transactions are encrypted and secure.
                </InfoCardText>
                <InfoCardText>
                  Available payment methods:
                </InfoCardText>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {/* Placeholder for payment method icons */}
                  <div style={{ padding: "8px", border: "1px solid var(--border-color)", borderRadius: "4px" }}>PayPal</div>
                  <div style={{ padding: "8px", border: "1px solid var(--border-color)", borderRadius: "4px" }}>Credit Card</div>
                  <div style={{ padding: "8px", border: "1px solid var(--border-color)", borderRadius: "4px" }}>M-Pesa</div>
                  <div style={{ padding: "8px", border: "1px solid var(--border-color)", borderRadius: "4px" }}>Flutterwave</div>
                </div>
              </DonateInfoCard>
            </SideContent>
          </DonateGrid>
        </DonateContent>
      </DonateSection>
    </>
  );
};

export default Donate;