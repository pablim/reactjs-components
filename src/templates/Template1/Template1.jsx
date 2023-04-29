import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.scss'

function Template1({ navbar, sidebar, content, footer }) {
	return (
        <Container 
			className={`Template1`}
			fluid
		>	
			<Row className='navbar'>
				<Col>
					{navbar}
				</Col>
			</Row>
			<Row >
				<Col className='noXPaddings'>
					<div className='mainContainer d-flex'>

						{sidebar}
						<div className='main'>
							{content}
						</div>
					</div>
				</Col>
			</Row>
			<Row className='footer'>
				<Col>
					{footer}
				</Col>
			</Row>
		
		</Container>
	);
}

export default Template1;

