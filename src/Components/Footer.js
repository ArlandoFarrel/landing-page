import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#FFCD92",
				textAlign: "center",
				marginTop: "-50px" }}>
		Group 3
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Our Team</Heading>
			<FooterLink href="#">Arlando Muhammad</FooterLink>
			<FooterLink href="#">Fadhila Zalfa</FooterLink>
			<FooterLink href="#">Griselda Putri</FooterLink>
            <FooterLink href="#">Khusnul Faddila</FooterLink>
		</Column>
        <Column>
			<Heading>Hobby</Heading>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Design</FooterLink>
			<FooterLink href="#">Design</FooterLink>
			<FooterLink href="#">Writing</FooterLink>
		</Column>
		<Column>
			<Heading>Our School</Heading>
			<FooterLink href="#">SMK Telkom Malang</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
		
				<span style={{ marginLeft: "10px" }}>
				@faafarrel
				</span>
			
			</FooterLink>
			<FooterLink href="#">
			
				<span style={{ marginLeft: "10px" }}>
				@zalfalisya
				</span>

			</FooterLink>
			<FooterLink href="#">
			
				<span style={{ marginLeft: "10px" }}>
				@griseldaputric
				</span>
			
			</FooterLink>
			<FooterLink href="#">
			
				<span style={{ marginLeft: "10px" }}>
				@nlfaa
				</span>
			
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
