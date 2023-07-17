export default function (input: string) {
    try {
        JSON.parse(input);
    } catch (_) {
        return false;
    }

    return true;
}
