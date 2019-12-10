import React, {useState} from 'react'
import {Button, Div, FormLayout, FormLayoutGroup, ModalPageHeader, Radio, SelectMimicry} from "@vkontakte/vkui"
import ModalPage from "@vkontakte/vkui/dist/components/ModalPage/ModalPage"


export function ModalCardFile({id, onClose, fixPanel}) {
	const [isLoaded, setIsLoaded] = useState(null)

	const load = () => {
		setIsLoaded(!isLoaded)
	}

	return <ModalPage
		dynamicContentHeight={true}
		id={id}
		onClose={onClose}
		header={<ModalPageHeader>FILE</ModalPageHeader>}
	>
		<FormLayout>
			<FormLayoutGroup>
				<Button level={!isLoaded ? "secondary" : "primary"} onClick={fixPanel} size="xl">Пофиксить</Button>
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
}