import React, {useState} from 'react'
import View from '@vkontakte/vkui/dist/components/View/View'
import ModalRoot from '@vkontakte/vkui/dist/components/ModalRoot/ModalRoot'
import ModalPage from '@vkontakte/vkui/dist/components/ModalPage/ModalPage'
import {
	Button, Div,
	FormLayout,
	FormLayoutGroup,
	Group,
	ModalPageHeader,
	Panel,
	PanelHeader,
	Radio,
	SelectMimicry
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import {ModalCardFile} from "./panels/ModalCardFile"


const MODAL_CARD_INNER = "MODAL_CARD_INNER"
const MODAL_CARD_FILE = "MODAL_CARD_FILE"

const App = () => {
	const [activePanel, setActivePanel] = useState(null)
	const [isLoaded, setIsLoaded] = useState(null)
	const [fix, setFix] = useState(null)

	const back = () => {
		setActivePanel(null)
	}

	const goInner = () => {
		setActivePanel(MODAL_CARD_INNER)
	}

	const goFile = () => {
		setActivePanel(MODAL_CARD_FILE)
	}

	const load = () => {
		setIsLoaded(!isLoaded)
	}

	const fixPanel = () => {
		setFix(!fix)
	}
	const modal = (
		<ModalRoot activeModal={activePanel}>
			<ModalCardFile dynamicContentHeight={true}
						   onClose={back}
						   fixPanel={fixPanel}
						   id={MODAL_CARD_FILE}/>
			<ModalPage
				dynamicContentHeight={true}
				id={MODAL_CARD_INNER}
				onClose={back}
				header={<ModalPageHeader>INNER</ModalPageHeader>
				}
			>
				<FormLayout>
					<FormLayoutGroup>
						<Button level={isLoaded ? "secondary" : "primary"} onClick={load}
								size="xl">{isLoaded ? "Выгрузить" : "Загрузить"}</Button>
					</FormLayoutGroup>

					{!isLoaded && <Div>Тут типа лоадер, нажмите загрузить чтобы загрузился контент большего размера</Div>}

					{isLoaded && <FormLayoutGroup top="Пол">
						<Radio name="sex" value={0} defaultChecked>Любой</Radio>
						<Radio name="sex" value={1}>Мужской</Radio>
						<Radio name="sex" value={2}>Женский</Radio>
					</FormLayoutGroup>}

					{isLoaded && <SelectMimicry top="Школа" placeholder="Выбрать школу" disabled/>}
				</FormLayout>
			</ModalPage>

			{fix ? <ModalPage
				id={"asd"}/> : <ModalPage
				id={"asd2"}/>}

		</ModalRoot>
	)

	return (
		<View activePanel="modals" modal={modal}>
			<Panel id="modals">
				<PanelHeader>Модальные окна</PanelHeader>
				<Group>
					<FormLayout>
						<Button size="xl" level="secondary" onClick={goInner}>
							Открыть модальную страницу inner (РАБОТАЕТ)
						</Button>
						<Button size="xl" level="secondary" onClick={goFile}>
							Открыть модальную страницу file (СЛОМАНО)
						</Button>
					</FormLayout>
				</Group>
			</Panel>
		</View>
	)
}

export default App

