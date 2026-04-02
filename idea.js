import React, { useState } from 'react';
import {
    Plus,
    Image as ImageIcon,
    Play,
    Users,
    Trash2,
    ChevronRight,
    LayoutGrid,
    History,
    Search,
    MoreVertical,
    X,
    Upload,
    Settings
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('home'); // home, my-images, my-games
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    // Mock Data
    const recentGames = [
        { id: 1, title: 'Mountain Sunset', progress: 65, pieces: 500, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200' },
        { id: 2, title: 'Abstract Art', progress: 12, pieces: 1000, image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=200' },
    ];

    const myImages = [
        { id: 1, title: 'Family Vacation', puzzleCount: 3, gameCount: 5, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=200' },
        { id: 2, title: 'Pet Portrait', puzzleCount: 1, gameCount: 2, image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=200' },
        { id: 3, title: 'Forest Path', puzzleCount: 2, gameCount: 1, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=200' },
    ];

    const SidebarItem = ({ id, icon: Icon, label }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </button>
    );

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col">
                <div className="flex items-center space-x-2 mb-10 px-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-800">JigsawPro</h1>
                </div>

                <nav className="space-y-2 flex-1">
                    <SidebarItem id="home" icon={LayoutGrid} label="Dashboard" />
                    <SidebarItem id="my-images" icon={ImageIcon} label="My Images" />
                    <SidebarItem id="my-games" icon={History} label="My Games" />
                </nav>

                <div className="pt-6 border-t border-slate-100">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-600">
                        <Settings size={20} />
                        <span className="font-medium text-sm">Settings</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-md px-8 py-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            {activeTab === 'home' && 'Welcome Back!'}
                            {activeTab === 'my-images' && 'My Image Library'}
                            {activeTab === 'my-games' && 'Ongoing Games'}
                        </h2>
                        <p className="text-slate-500 text-sm">
                            {activeTab === 'home' && 'Pick up where you left off or start something new.'}
                            {activeTab === 'my-images' && 'Manage your uploads and create new puzzles.'}
                            {activeTab === 'my-games' && 'Join or continue your jigsaw challenges.'}
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
                            />
                        </div>
                        <button
                            onClick={() => setIsUploadModalOpen(true)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-md transition-transform active:scale-95"
                        >
                            <Plus size={20} />
                            <span>Create Puzzle</span>
                        </button>
                    </div>
                </header>

                <div className="p-8 space-y-10">

                    {/* DASHBOARD VIEW */}
                    {activeTab === 'home' && (
                        <>
                            {/* Continue Playing Section */}
                            <section>
                                <div className="flex justify-between items-end mb-4">
                                    <h3 className="text-lg font-bold">Continue Playing</h3>
                                    <button onClick={() => setActiveTab('my-games')} className="text-indigo-600 text-sm font-semibold hover:underline">View all</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recentGames.map(game => (
                                        <div key={game.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                                            <div className="relative h-40">
                                                <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <button className="bg-white p-3 rounded-full text-indigo-600 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                        <Play size={24} fill="currentColor" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold">{game.title}</h4>
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{game.pieces} Pcs</span>
                                                </div>
                                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-1">
                                                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${game.progress}%` }}></div>
                                                </div>
                                                <p className="text-xs text-slate-500 font-medium">{game.progress}% completed</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Quick Actions / Categories */}
                            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-2">Ready for a challenge?</h3>
                                        <p className="text-indigo-200 mb-6 max-w-md">Try our puzzle of the day or upload your own favorite memory to start building.</p>
                                        <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">Start Daily Puzzle</button>
                                    </div>
                                    {/* Decorative element */}
                                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                                </div>
                                <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-center items-center text-center">
                                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                                        <Users size={32} />
                                    </div>
                                    <h4 className="font-bold mb-1">Collaborative Play</h4>
                                    <p className="text-sm text-slate-500 mb-4">Invite friends to solve puzzles together in real-time.</p>
                                    <button className="text-indigo-600 font-bold text-sm hover:underline">See invitations</button>
                                </div>
                            </section>
                        </>
                    )}

                    {/* MY IMAGES VIEW */}
                    {activeTab === 'my-images' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {myImages.map(img => (
                                <div key={img.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3 group hover:border-indigo-300 transition-all cursor-pointer">
                                    <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                                        <img src={img.image} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute top-2 right-2">
                                            <button className="p-1.5 bg-white/90 backdrop-blur rounded-lg text-slate-600 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-1">
                                        <h4 className="font-bold truncate mb-1">{img.title}</h4>
                                        <div className="flex items-center text-xs text-slate-500 space-x-3">
                                            <span className="flex items-center"><LayoutGrid size={12} className="mr-1" /> {img.puzzleCount} Puzzles</span>
                                            <span className="flex items-center"><Play size={12} className="mr-1" /> {img.gameCount} Games</span>
                                        </div>
                                        <button className="w-full mt-4 py-2 border border-slate-100 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center">
                                            Manage <ChevronRight size={14} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Add New Card */}
                            <button
                                onClick={() => setIsUploadModalOpen(true)}
                                className="h-[320px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all group"
                            >
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-100">
                                    <Plus size={24} />
                                </div>
                                <span className="font-semibold">Add New Image</span>
                            </button>
                        </div>
                    )}

                    {/* MY GAMES VIEW (List Pattern) */}
                    {activeTab === 'my-games' && (
                        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Puzzle</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Pieces</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Players</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {recentGames.map(game => (
                                        <tr key={game.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-4">
                                                    <img src={game.image} className="w-12 h-12 rounded-lg object-cover" />
                                                    <span className="font-bold">{game.title}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                                {game.progress}% Done
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-500">
                                                {game.pieces}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex -space-x-2">
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-600">JD</div>
                                                    <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
                                                        <Plus size={12} className="text-slate-400" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors" title="Invite">
                                                        <Users size={18} />
                                                    </button>
                                                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                                                        <Trash2 size={18} />
                                                    </button>
                                                    <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-indigo-700 active:transform active:scale-95 transition-all flex items-center">
                                                        Play <ChevronRight size={14} className="ml-1" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>
            </main>

            {/* UPLOAD MODAL OVERLAY */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold">Create New Puzzle</h3>
                            <button onClick={() => setIsUploadModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="border-2 border-dashed border-indigo-100 rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-indigo-50/30 mb-6">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-indigo-500">
                                    <Upload size={32} />
                                </div>
                                <h4 className="font-bold mb-1">Click or drag image to upload</h4>
                                <p className="text-sm text-slate-500">Supports JPG, PNG (Max 10MB)</p>
                                <input type="file" className="hidden" id="file-upload" />
                                <button
                                    onClick={() => document.getElementById('file-upload').click()}
                                    className="mt-6 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100"
                                >
                                    Browse Files
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Puzzle Title</label>
                                    <input type="text" placeholder="e.g., Summer at the Beach" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Piece Count</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            <option>100 Pieces</option>
                                            <option>250 Pieces</option>
                                            <option>500 Pieces</option>
                                            <option>1000 Pieces</option>
                                        </select>
                                    </div>
                                    <div className="flex items-end">
                                        <button className="w-full px-4 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors">
                                            Generate & Start
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;