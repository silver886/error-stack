export class ErrorContext extends Error {
    public readonly name = 'ErrorContext';

    public context: Record<string, unknown> = {};

    private readonly original: Error;

    public constructor(error: Error) {
        super(error.message);
        super.name = error.name;
        super.stack = error.stack;
        this.original = error;
    }

    public get error(): Error {
        return this.original;
    }
}
