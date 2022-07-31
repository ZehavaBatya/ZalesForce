import { memo } from 'react';
import type { FC } from 'react';

import { BellIconIcon } from './BellIconIcon';
import classes from './Console.module.css';
import { ProfilePictureIcon } from './ProfilePictureIcon';
import { ProfilePictureIcon2 } from './ProfilePictureIcon2';
import { SearchBarIcon } from './SearchBarIcon';
import { StarIconIcon } from './StarIconIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 2:2 */
export const Console: FC<Props> = memo(function Console(props = {}) {
  return (
    <div className={classes.root}>
      <div className={classes.searchBar}>
        <SearchBarIcon className={classes.icon} />
      </div>
      <div className={classes.search}>Search...</div>
      <div className={classes.line1}></div>
      <div className={classes.companyLogo}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.detailsRelatedRelationshipsInt}>
        <span className={classes.labelWrapper}>
          <span className={classes.label}>Details </span>
          <span className={classes.label2}> Related </span>
          <span className={classes.label3}>Relationships</span>
          <span className={classes.label4}> </span>
          <span className={classes.label5}>Interactions</span>
        </span>
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.profilePicture}>
        <ProfilePictureIcon className={classes.icon2} />
      </div>
      <div className={classes.profilePicture2}>
        <ProfilePictureIcon2 className={classes.icon3} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.starIcon}>
        <StarIconIcon className={classes.icon4} />
      </div>
      <div className={classes.bellIcon}>
        <BellIconIcon className={classes.icon5} />
      </div>
      <div className={classes.console}>Console</div>
      <div className={classes.accounts}>Accounts</div>
      <div className={classes.line2}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.account}>Account</div>
      <div className={classes.moolaKaChingManagementInc}>Moola Ka-Ching Management, Inc. </div>
      <div className={classes.moolaKaChingManag}>Moola Ka-Ching Manag...</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon6} />
      </div>
      <div className={classes.institutionCode}>Institution Code</div>
      <div className={classes.lastActivityDate}>Last Activity Date</div>
      <div className={classes.accountOwner}>Account Owner</div>
      <div className={classes.annalieseBronz}>Annaliese Bronz</div>
      <div className={classes.institutionType}>Institution Type</div>
      <div className={classes.cFSalesUnit}>CF Sales Unit</div>
      <div className={classes.privateCapital}>Private Capital</div>
      <div className={classes.rIAOrSingleMultiFamilyOffices}>RIA or Single/Multi Family Offices</div>
      <div className={classes.activityChatter}>
        <span className={classes.labelWrapper2}>
          <span className={classes.label6}>Activity </span>
          <span className={classes.label7}>Chatter</span>
        </span>
      </div>
      <div className={classes._7312022}>7/31/2022</div>
      <div className={classes.line4}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle18}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.new}>New</div>
      <div className={classes.rectangle162}></div>
      <div className={classes.rectangle182}></div>
      <div className={classes.rectangle172}></div>
      <div className={classes.new2}>New</div>
      <div className={classes.rectangle163}></div>
      <div className={classes.rectangle183}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.rectangle173}></div>
      <div className={classes.new3}>New</div>
      <div className={classes.follow}>Follow</div>
      <div className={classes.seismic}>Seismic</div>
      <div className={classes.line5}></div>
      <div className={classes.prospectActiveAtRiskInactiveLa}>Prospect Active At Risk Inactive Lapsed </div>
      <div className={classes.markStatusAsComplete}>Mark Status as Complete</div>
      <div className={classes.line6}></div>
      <div className={classes.relatedContacts}>Related Contacts (0)</div>
      <div className={classes.rectangle164}></div>
      <div className={classes.rectangle184}></div>
      <div className={classes.rectangle174}></div>
      <div className={classes.new4}>New</div>
      <div className={classes.financialAccountPrimaryOwner}>Financial Account Primary Owner (0)</div>
      <div className={classes.rectangle165}></div>
      <div className={classes.rectangle185}></div>
      <div className={classes.rectangle175}></div>
      <div className={classes.new5}>New</div>
      <div className={classes.financialAccountPrimaryOwner2}>Financial Account Primary Owner (0)</div>
      <div className={classes.rectangle166}></div>
      <div className={classes.rectangle186}></div>
      <div className={classes.rectangle176}></div>
      <div className={classes.new6}>New</div>
      <div className={classes.accountRelations}>Account Relations (0)</div>
      <div className={classes.rectangle167}></div>
      <div className={classes.rectangle187}></div>
      <div className={classes.rectangle177}></div>
      <div className={classes.new7}>New</div>
      <div className={classes.rectangle168}></div>
      <div className={classes.rectangle188}></div>
      <div className={classes.rectangle178}></div>
      <div className={classes.new8}>New</div>
      <div className={classes.rectangle169}></div>
      <div className={classes.rectangle189}></div>
      <div className={classes.rectangle179}></div>
      <div className={classes.new9}>New</div>
      <div className={classes.rectangle1610}></div>
      <div className={classes.rectangle1810}></div>
      <div className={classes.rectangle1710}></div>
      <div className={classes.new10}>New</div>
      <div className={classes.rectangle1611}></div>
      <div className={classes.rectangle1811}></div>
      <div className={classes.rectangle1711}></div>
      <div className={classes.new11}>New</div>
      <div className={classes.campaigns}>Campaigns (0)</div>
      <div className={classes.approvalHistory}>Approval History (0)</div>
      <div className={classes.cases}>Cases (0)</div>
      <div className={classes.interactions}>Interactions (0)</div>
      <div className={classes.accountHistory}>Account History (0)</div>
      <div className={classes.rectangle1612}></div>
      <div className={classes.rectangle1812}></div>
      <div className={classes.rectangle1712}></div>
      <div className={classes.new12}>New</div>
      <div className={classes.accountTeam}>Account Team (0)</div>
      <div className={classes.opportunities}>Opportunities (0)</div>
      <div className={classes.notes}>Notes (0)</div>
      <div className={classes.totalFinancialAccounts}>Total Financial Accounts</div>
      <div className={classes.line7}></div>
      <div className={classes.line3}></div>
    </div>
  );
});
