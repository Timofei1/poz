import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import { Div, Tabbar, TabbarItem, IOS, platform, HeaderButton } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';



const osName = platform();

const Persik = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
       left={<HeaderButton onClick={go} data-to="home">
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </HeaderButton>}
      >
      Новый год</PanelHeader>>
	<Tabbar>
		<TabbarItem
            onClick={go}
            data-to="home"
            data-story="feed"
          ><Icon28KeyboardBotsOutline /></TabbarItem>
		  <TabbarItem
            onClick={go}
			data-to="persik"
			label="new"
            data-story="feed"
          ><Icon28ArticleOutline /></TabbarItem>
		  <TabbarItem
            onClick={go}
            data-to="persik1"
            data-story="feed"
            ><Icon28SettingsOutline fill="#0000FF"/></TabbarItem>
        </Tabbar>
		
        
		
	</Panel>
	
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Persik;