import { Heading, Stack, Center, Button, Input } from "@chakra-ui/react";
import Container from "../../../components/Container";
import React from "react";
import { CreateProps, CreateState } from "../../../interfaces";
import copy from "copy-to-clipboard";
import Head from "next/head"

export default class CreateLTC extends React.Component<CreateProps, CreateState> {
    constructor(props: CreateProps) {
        super(props);
        this.state = {
            output: null,
            text: "📋 Copy To Clipboard",
        };
        this.handleChange = this.handleChange.bind(this);
        this.run = this.run.bind(this);
    }

    run() {
        copy(this.state.output);
        this.setState({
            text: "✅ Copied!",
        });
    }

    handleChange(element) {
        if (element.target.value == "") {
            this.setState({
                output: null,
            });
        } else {
            this.setState({
                output:
                    "https://coinworks.club/ltc/" + element.target.value,
            });
        }
    }

    render() {
        return (
            <>
            <Head>
            <title>Coinworks</title>
                <link rel="icon" href="/ltc.svg" />
                <meta name="og:type" content="website" />
                <meta
                    name="description"
                    content="A website that allows you to make your own custom cryptocurrency donation link! No login or registration needed, comes with many cool features."
                />
                <meta
                    name="keywords"
                    content="coinworks, donate bitcoin, coinbase, donation"
                />
                <meta
                    name="og:description"
                    content="A website that allows you to make your own custom cryptocurrency donation link! No login or registration needed, comes with many cool features."
                />
                <meta name="og:image" content="/ltc.svg" />
                <meta name="theme-color" content="#f2a900" />
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'></script>
            </Head>
                <Container />
                <Center>
                    <Stack spacing={8}>
                        <Heading>Litecoin Link Generator</Heading>
                        <Input
                            placeholder="Litecoin Address"
                            onChange={this.handleChange}
                        />
                        {this.state.output ? (
                            <>
                                <Heading>Your link:</Heading>
                                <code>{this.state.output}</code>
                                <Button
                                    colorScheme="teal"
                                    variant="ghost"
                                    onClick={this.run}
                                >
                                    {this.state.text}
                                </Button>
                            </>
                        ) : null}
                    </Stack>
                </Center>
            </>
        );
    }
}
