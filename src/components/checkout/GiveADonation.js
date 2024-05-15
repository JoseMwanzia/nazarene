import React, { useState } from 'react';
import BillingInfo from './BillingInfo';
import PymentOptions from './PymentOptions';

const GiveADonation = () => {
  const [frequency, setFrequency] = useState('once');
  const [amount, setAmount] = useState(10);
  const [purpose, setPurpose] = useState('');
  const [submitted, setSubmitted] = useState(false);
  

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ frequency, amount, purpose });
    setSubmitted(true);
  };

  if (submitted) {
    return <BillingInfo />;
  }

  return (
    <>
    <form method="post" action="//submit.form" onSubmit={ handleSubmit} className='col-md-6' style={{margin:'10px', float: 'right'}}>
      <div style={{ maxWidth: '400px' }}>
      </div>
      <div style={{ paddingBottom: '18px', fontSize: '24px' }}>Church Donation</div>
      <div style={{ display: 'flex', paddingBottom: '18px', maxWidth: '550px' }}>
        <div style={{ marginLeft: '0', marginRight: '1%', width: '49%' }}>
          First name<br />
          <input type="text" id="data_2" name="data_2" style={{ maxWidth: '100%' }} className="form-control" />
        </div>
        <div style={{ marginLeft: '1%', marginRight: '0', width: '49%' }}>
          Last name<br />
          <input type="text" id="data_3" name="data_3" style={{ maxWidth: '100%' }} className="form-control" />
        </div>
      </div>
      <div style={{ paddingBottom: '18px' }}>
        Email<br />
        <input type="text" id="data_4" name="data_4" style={{ maxWidth: '550px' }} className="form-control" />
      </div>
      <div style={{ paddingBottom: '18px' }}>
        {/* Donation Amount<span style={{ color: 'red' }}> *</span><br /> */}
        <label>
          Donate:
        </label><span style={{ color: 'red' }}> *</span>
          <input type='number'  className='col-md-12' />
      </div>
      <div style={{ paddingBottom: '18px' }}>
        Full Address<br />
        <textarea id="data_6" name="data_6" style={{ maxWidth: '550px' }} rows="3" className="form-control"></textarea>
      </div>
      <PymentOptions/>
      {/* <div style={{ paddingBottom: '18px' }}>
        <input name="skip_Submit" value="Donate" type="submit" />
      </div> */}
      <div style={{ float: 'right' }}>
        <a href="https://www.100forms.com" id="lnk100" title="form to email">form to email</a>
      </div>
      <script src="https://www.100forms.com/js/FORMKEY:WCUXQ58PRTA2/SEND:my@email.com" type="text/javascript"></script>
    </form>
    </>
  );
};

export default GiveADonation;
