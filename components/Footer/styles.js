import styled from "styled-components";

export const Styled = {
	Inner: styled.div`
		background-color: black;
		height: 60vh;
		widht: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		justify-items: center;
		text-align: center;
		color: white;
	`,
	IconContainer: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		justify-items: center;
		text-align: center;
		margin-bottom: 1rem;
	`,
	Icon: styled.div`
		margin: 20%;
	`,
	Copyright: styled.div`
		font-size: 1rem;
		text-align: center;
		color: white;
	`,
	Button: styled.span`
		border: 4px solid white;
		padding: 2% 2%;
		width: 30%;
		text-align: center;
		color: white;
		font-size: 2rem;
		position: absolute;
		left: 36%;
		bottom: 10%;
		border-radius: 100px;
		background-color: ${UTILS.COLORS.VIOLET};
		@media ${UTILS.SCREEN.MOBILE} {
			bottom: 5%;
			font-size: 1.5rem;
		}
};
