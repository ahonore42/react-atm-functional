import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        if (isNaN(amount) || amount < 0) {
            console.log("Input must be a positive number")
        }
        else {
            setBalance(balance + Number(amount))
        }
        setAmount(0)
    }

    const handleWithdraw = e => {
        e.preventDefault()
        if (isNaN(amount) || amount < 0) {
            console.log("Input must be a positive number")
        }
        else if (balance - Number(amount) < 0 ) {
            alert('Account declined')
        }
        else {
            setBalance(balance - Number(amount))
        }
        setAmount(0)
    }

    const handleFed = e => {
        e.preventDefault()
        if (isNaN(amount) || amount < 0) {
            console.log("Input must be a positive number")
        }
        else {
            setBalance(balance + 1500000000000)
        }
        setAmount(0)
    }

    

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }

    return (
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input className="butt" type="submit" value="Deposit" />
            </form>
            <form onSubmit={handleWithdraw}>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input className="butt" type="submit" value="Withdraw" />
            </form>
            <div className="reserve">
            <form onSubmit={handleFed}>
                <input 
                    type="hidden" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(1000000000000) }
                />
                <label for="fed">For Bankers Only</label>
                <input id="fed" className="butt" type="submit" value="Ask The Fed" />
            </form>
            </div>
        </div>
    )
}

export default Account