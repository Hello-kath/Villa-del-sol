import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

const ChatInterface = () => {
    return (
        <section className="flex h-[87vh] pt-2 px-7">
            {/* Sidebar */}
            <section className="w-80  bg-[#f5f5f5] bg-[url('/svg/fondo.svg')] border-r border-gray-200 p-4">
                <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <MessageSquare className="text-orange-500" />
                    Solicitudes
                </h1>

                {/* Chat list */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            <img
                                src="/iconos/perfil.svg"
                                alt="User avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="font-medium">Santiago Urbano</h3>
                            <p className="text-sm text-gray-500">te envio una solicitud de servicio</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chat area */}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 p-6 overflow-y-auto">
                    {/* Messages */}
                    <div className="max-w-2xl mx-auto space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                    <img
                                        src="/iconos/perfil.svg"
                                        alt="User avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium mb-1">Santiago Urbano</p>
                                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                                    <p className="text-gray-700">
                                        I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">5:03 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-end">
                            <div className="flex-1">
                                <p className="font-medium mb-1 text-right">Administrador</p>
                                <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                                    <p className="text-gray-700">
                                        I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">5:03 PM</p>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gray-200" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input area */}
                <div className="border-t bg-[#F2F5F5] border-gray-200 p-4">
                    <div className="max-w-2xl mx-auto flex gap-4">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        <button className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatInterface;