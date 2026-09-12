import React from 'react';
import type { MTabsNavProps, NavTabItem } from './types';
import { computeTabsNavClasses } from './m-tabs-nav.controller';

export interface ReactTabsNavProps extends MTabsNavProps {
  className?: string;
  onTabChange?: (tabId: string) => void;
}

export const MTabsNavReact: React.FC<ReactTabsNavProps> = ({
  tabs,
  modelValue = undefined,
  grow = false,
  align = 'start',
  className = '',
  onTabChange = undefined,
}) => {
  const currentTab = modelValue || (tabs[0] ? tabs[0].id : '');
  const resolvedClassNames = computeTabsNavClasses(
    { tabs, grow, align },
    className
  ).join(' ');

  const handleSelect = (tab: NavTabItem) => {
    if (tab.disabled) return;
    onTabChange?.(tab.id);
  };

  return (
    <nav className={resolvedClassNames} role="tablist">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={tab.disabled}
            className={`m-tabs-nav__item ${
              isActive ? 'm-tabs-nav__item--active' : ''
            }`}
            onClick={() => handleSelect(tab)}
          >
            {tab.icon ? (
              <span className="m-tabs-nav__icon">{tab.icon}</span>
            ) : null}
            <span>{tab.label}</span>
            {tab.badge ? (
              <span className="m-tabs-nav__badge">{tab.badge}</span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
};

export default MTabsNavReact;
