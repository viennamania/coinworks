import Head from "next/head";
import { Heading, Stack, Center, Text, Button } from "@chakra-ui/react";
import Container from "../components/Container";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>MBC Wallet</title>
               
                <meta name="og:type" content="website" />
                <meta
                    name="description"
                    content="MBC Wallet"
                />
                <meta
                    name="keywords"
                    content="MBC, Microbitcoin, donation"
                />
                <meta
                    name="og:description"
                    content="MBC Wallet"
                />



                <meta property="og:image:width" content="1400"></meta>
                <meta property="og:image:height" content="1400"></meta>

                <meta name="og:image" content="/microbitcoin.png" />

                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content="/summary_large_image.png"></meta>

                <meta name="theme-color" content="#f2a900" />
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'></script>
            </Head>
            <Container />
            <Center>
                <Stack spacing={8}>
                    <Heading>Coinworks</Heading>
                    <Text>No registrations. Easy. Fast.</Text>
                    <Link href="/docs">
                        <a rel="noreferer">
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="blue"
                            >
                                Documentation
                            </Button>
                        </a>
                    </Link>
                </Stack>
            </Center>

        </>
    );
}
