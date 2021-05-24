import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
    Code,
    Stack,
    Center,
    Heading,
    Image,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import Copy from "../../components/Copy";
import cryptaddress from "cryptaddress-validator";

export default function xmr() {
    const router = useRouter();
    const { pid } = router.query;
    const valid = cryptaddress("xmr").test(pid);

    return (
        <>
            <Head>
                <title>Coinworks</title>
                <link rel="icon" href="/xmr.svg" />
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
                <meta name="og:image" content="/xmr.svg" />
                <meta name="theme-color" content="#f2a900" />
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'
                ></script>
            </Head>
            <Container />
            <Center>
                <Stack spacing={5}>
                    <Heading>Donate Monero To</Heading>
                    <Code>{pid}</Code>
                    {valid ? null : (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle textAlign="center" mr={5}>
                                This address might be invalid.
                            </AlertTitle>
                        </Alert>
                    )}
                    {
                        // @ts-ignore
                        <Copy btc={pid} />
                    }
                    <Center>
                                    <Image
                                        boxSize="150px"
                                        objectFit="cover"
                                        src={
                                            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=xmr:" +
                                            pid
                                        }
                                        alt="QRCode"
                                    />
                    </Center>
                </Stack>
            </Center>
        </>
    );
}
