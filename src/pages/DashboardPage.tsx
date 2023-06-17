import { css } from '@emotion/css'
import TopBar from '../components/TopBar'
import AccountsList from '../components/AccountsList'
import RecordsList from '../components/RecordsList'
import BudgetsList from '../components/BudgetsList'

const styledDashboardPageWrapper = css`
    height: 100%;
    background-color: #f0f0f0;
`

const styledDashboardPageContent = css`
    display: flex;
    flex-wrap: wrap;
    height: 90vh;
    background-color: #f0f0f0;
`

const styledAccounts = css`
    height: 230px;
`

const styledRecords = css`
    align-self: flex-start;
    height: 66.7vh;
`

const styledBudgets = css`
    width: 28%;
    height: 89vh;
`

const styledLeftPanel = css`
    width: 70%;
`

export default function DashboardPage() {
    return (
        <div className={styledDashboardPageWrapper}>
            <TopBar pageNameText={'Dashboard'} />

            <div className={styledDashboardPageContent}>
                <div className={styledLeftPanel}>
                    <div className={styledAccounts}>
                        <AccountsList />
                    </div>
                    <div className={styledRecords}>
                        <RecordsList />
                    </div>
                </div>
                <div className={styledBudgets}>
                    <BudgetsList />
                </div>
            </div>
        </div>
    )
}
