import HeaderBox from '@/components/ui/HeaderBox'
import RighSidebar from '@/components/ui/RighSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Aisha",lastName: "Najeeb",email: "aisha@mail.com"};
  return (
    <div>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox type="greeting" title="Welcome" 
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficently."/>
         <TotalBalanceBox accounts={[]} totalBanks={1}
         totalCurrentBalance={1250.35}/>
         
         
          </header>
          RECENT TRANSACTIONS
        </div>
        <RighSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500.50}]}/>
      </section>
      
      
    </div>
  )
}

export default Home
